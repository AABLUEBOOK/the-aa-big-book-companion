import React, { useState } from "react";
import { Folder, Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function CollectionsManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', color: 'blue' });
  const queryClient = useQueryClient();

  const { data: collections = [] } = useQuery({
    queryKey: ['collections'],
    queryFn: () => base44.entities.Collection.list(),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Collection.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
      setFormData({ name: '', description: '', color: 'blue' });
      setIsOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Collection.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
      setEditingId(null);
      setFormData({ name: '', description: '', color: 'blue' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Collection.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
    },
  });

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  const colorClasses = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) return;
    
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (collection) => {
    setEditingId(collection.id);
    setFormData({
      name: collection.name,
      description: collection.description || '',
      color: collection.color,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Folder className="w-5 h-5 text-[#25DCE6]" />
          Collections
        </h3>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]">
              <Plus className="w-4 h-4 mr-1" />
              New
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Collection</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Collection name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Textarea
                placeholder="Description (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <div>
                <label className="text-sm font-medium mb-2 block">Color</label>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setFormData({ ...formData, color })}
                      className={`w-8 h-8 rounded-full ${colorClasses[color]} ${
                        formData.color === color ? 'ring-2 ring-gray-800 ring-offset-2' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
              <Button onClick={handleSubmit} className="w-full">
                Create Collection
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-3">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3"
          >
            <div className={`w-3 h-3 rounded-full ${colorClasses[collection.color]}`} />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{collection.name}</h4>
              {collection.description && (
                <p className="text-sm text-gray-600">{collection.description}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {(collection.bookmark_ids?.length || 0) + (collection.note_ids?.length || 0)} items
              </p>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEdit(collection)}
                className="h-8 w-8 p-0"
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteMutation.mutate(collection.id)}
                className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        
        {collections.length === 0 && (
          <p className="text-center text-sm text-gray-500 py-8">
            No collections yet. Create one to organize your bookmarks and notes.
          </p>
        )}
      </div>
    </div>
  );
}