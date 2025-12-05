import React, { useState, useEffect } from "react";
import { Settings, X, Type, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function SettingsPanel({ isOpen, onClose, onSettingsChange }) {
  const queryClient = useQueryClient();
  
  const { data: settings } = useQuery({
    queryKey: ['user-settings'],
    queryFn: async () => {
      const list = await base44.entities.UserSettings.list();
      return list[0] || null;
    },
  });

  const [localSettings, setLocalSettings] = useState({
    font_size: 'medium',
    line_spacing: 'normal',
    theme: 'light',
    dyslexia_font: false,
  });

  useEffect(() => {
    if (settings) {
      setLocalSettings(settings);
    }
  }, [settings]);

  const updateSettingsMutation = useMutation({
    mutationFn: async (newSettings) => {
      if (settings?.id) {
        return base44.entities.UserSettings.update(settings.id, newSettings);
      } else {
        return base44.entities.UserSettings.create(newSettings);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user-settings'] });
      if (onSettingsChange) onSettingsChange(data);
    },
  });

  const handleChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    updateSettingsMutation.mutate(newSettings);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#25DCE6]" />
            <h2 className="text-lg font-semibold text-gray-900">Reading Settings</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Font Size */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              Font Size
            </Label>
            <RadioGroup value={localSettings.font_size} onValueChange={(v) => handleChange('font_size', v)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small" className="text-sm">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="text-sm">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large" className="text-sm">Large</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extra-large" id="extra-large" />
                <Label htmlFor="extra-large" className="text-sm">Extra Large</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Line Spacing */}
          <div className="space-y-3">
            <Label>Line Spacing</Label>
            <RadioGroup value={localSettings.line_spacing} onValueChange={(v) => handleChange('line_spacing', v)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="compact" />
                <Label htmlFor="compact" className="text-sm">Compact</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="normal" />
                <Label htmlFor="normal" className="text-sm">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="relaxed" id="relaxed" />
                <Label htmlFor="relaxed" className="text-sm">Relaxed</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Theme */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Moon className="w-4 h-4" />
              Theme
            </Label>
            <RadioGroup value={localSettings.theme} onValueChange={(v) => handleChange('theme', v)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="text-sm">Light</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="text-sm">Dark</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sepia" id="sepia" />
                <Label htmlFor="sepia" className="text-sm">Sepia</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Dyslexia Font */}
          <div className="flex items-center justify-between">
            <Label htmlFor="dyslexia" className="text-sm">Dyslexia-Friendly Font</Label>
            <Switch
              id="dyslexia"
              checked={localSettings.dyslexia_font}
              onCheckedChange={(v) => handleChange('dyslexia_font', v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}