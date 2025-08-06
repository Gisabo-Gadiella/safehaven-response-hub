import DashboardLayout from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AlertTriangle } from 'lucide-react'

const ReportDisaster = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Report Disaster</h1>
          <p className="text-gray-600 mt-2">Submit a disaster report to emergency services</p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <span>Emergency Report Form</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Disaster Type</Label>
                  <Input id="type" placeholder="e.g., Fire, Flood, Earthquake" />
                </div>
                <div>
                  <Label htmlFor="severity">Severity Level</Label>
                  <Input id="severity" placeholder="Low, Medium, High" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Exact address or landmark" />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Detailed description of the incident" rows={4} />
              </div>
              
              <Button variant="emergency" className="w-full">
                Submit Emergency Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default ReportDisaster