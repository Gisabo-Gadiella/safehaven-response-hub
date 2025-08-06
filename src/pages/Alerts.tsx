import { AlertTriangle, Clock, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardLayout from '@/components/layout/DashboardLayout'

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: "Severe Weather",
      title: "Thunderstorm Warning",
      description: "Severe thunderstorms expected in downtown area",
      location: "Downtown District",
      severity: "High",
      time: "2 minutes ago",
      status: "Active"
    },
    {
      id: 2,
      type: "Fire",
      title: "Wildfire Alert",
      description: "Small wildfire detected near residential area",
      location: "North Hills",
      severity: "Medium",
      time: "15 minutes ago",
      status: "Monitoring"
    },
    {
      id: 3,
      type: "Flood",
      title: "Flash Flood Watch",
      description: "Heavy rain may cause flooding in low-lying areas",
      location: "River Valley",
      severity: "Low",
      time: "1 hour ago",
      status: "Watch"
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-500'
      case 'Medium': return 'bg-yellow-500'
      case 'Low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Emergency Alerts</h1>
          <p className="text-gray-600 mt-2">Real-time disaster notifications and warnings</p>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <Card key={alert.id} className="hover-lift border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <div>
                      <CardTitle className="text-lg">{alert.title}</CardTitle>
                      <p className="text-sm text-gray-600">{alert.type}</p>
                    </div>
                  </div>
                  <Badge className={`${getSeverityColor(alert.severity)} text-white`}>
                    {alert.severity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{alert.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{alert.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{alert.time}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{alert.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Alerts