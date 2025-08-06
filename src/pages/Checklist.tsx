import DashboardLayout from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckCircle } from 'lucide-react'

const Checklist = () => {
  const checklistItems = [
    { id: 1, item: "Emergency kit prepared", completed: true },
    { id: 2, item: "Family emergency plan created", completed: true },
    { id: 3, item: "Important documents secured", completed: false },
    { id: 4, item: "Emergency contacts updated", completed: false },
    { id: 5, item: "Home safety inspection completed", completed: false }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Emergency Checklist</h1>
          <p className="text-gray-600 mt-2">Essential preparedness tasks</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span>Disaster Preparedness Checklist</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {checklistItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <Checkbox id={`item-${item.id}`} checked={item.completed} />
                  <label 
                    htmlFor={`item-${item.id}`} 
                    className={`text-sm ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
                  >
                    {item.item}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default Checklist