import React from "react";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { format, differenceInDays } from "date-fns";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ReadingPlanCard() {
  const { data: plans = [] } = useQuery({
    queryKey: ['reading-plans'],
    queryFn: () => base44.entities.ReadingPlan.list(),
  });

  const activePlan = plans[0];

  if (!activePlan) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#25DCE6]" />
            Daily Reading Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">Stay consistent with a structured reading schedule</p>
          <Link to={createPageUrl('ReadingPlan')}>
            <Button className="w-full bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]">
              Create Reading Plan
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  const startDate = new Date(activePlan.start_date);
  const today = new Date();
  const daysSinceStart = differenceInDays(today, startDate);
  const currentDay = Math.min(daysSinceStart + 1, activePlan.current_day || 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#25DCE6]" />
          {activePlan.plan_type} Reading Plan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Day {currentDay}</span>
          <span className="text-xs text-gray-500">{format(startDate, 'MMM d, yyyy')}</span>
        </div>
        
        <Link to={createPageUrl('ReadingPlan')}>
          <Button className="w-full" variant="outline">
            View Today's Reading <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}