import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function WeatherWidget({ onRemove }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setWeather({
        temperature: 22,
        condition: "Sunny",
      })
    }, 1000)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Weather</CardTitle>
        <Button variant="ghost" size="icon" onClick={onRemove}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {weather ? (
          <div>
            <p className="text-2xl font-bold">{weather.temperature}°C</p>
            <p className="text-xs text-muted-foreground">{weather.condition}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </CardContent>
    </Card>
  )
}

