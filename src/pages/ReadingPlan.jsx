import React, { useState } from "react";
import { Calendar, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format, addDays } from "date-fns";

export default function ReadingPlan() {
  const [planType, setPlanType] = useState('30-day');
  const queryClient = useQueryClient();

  const { data: plans = [] } = useQuery({
    queryKey: ['reading-plans'],
    queryFn: () => base44.entities.ReadingPlan.list(),
  });

  const createPlanMutation = useMutation({
    mutationFn: (data) => base44.entities.ReadingPlan.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reading-plans'] });
    },
  });

  const handleCreatePlan = () => {
    createPlanMutation.mutate({
      plan_type: planType,
      start_date: format(new Date(), 'yyyy-MM-dd'),
      current_day: 1,
      chapters_per_day: [],
      reminder_enabled: false,
    });
  };

  const activePlan = plans[0];

  return (
    <div className="min-h-screen bg-[#222A31] p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Link to={createPageUrl('Home')}>
          <Button variant="ghost" className="text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-[#25DCE6]" />
            <h1 className="text-3xl font-bold text-gray-900">Reading Plan</h1>
          </div>

          {!activePlan ? (
            <div className="space-y-6">
              <p className="text-gray-600">
                Choose a reading plan to help you stay consistent with your Big Book study.
              </p>

              <div className="space-y-4">
                <Label>Select Plan Duration</Label>
                <RadioGroup value={planType} onValueChange={setPlanType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30-day" id="30-day" />
                    <Label htmlFor="30-day">30-Day Plan - Complete the book in a month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="60-day" id="60-day" />
                    <Label htmlFor="60-day">60-Day Plan - Slower, deeper reading</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="90-day" id="90-day" />
                    <Label htmlFor="90-day">90-Day Plan - Comprehensive study</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                onClick={handleCreatePlan}
                className="w-full bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]"
                disabled={createPlanMutation.isPending}
              >
                Start Reading Plan
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{activePlan.plan_type} Reading Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Started:</span>
                      <span className="font-medium">{format(new Date(activePlan.start_date), 'PPP')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Day:</span>
                      <span className="font-medium">Day {activePlan.current_day}</span>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-2">Today's Reading:</p>
                      <p className="text-gray-800">Continue where you left off...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Link to={createPageUrl('Home')}>
                <Button className="w-full">
                  Go to Reading
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}