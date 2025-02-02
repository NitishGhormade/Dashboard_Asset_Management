import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { WeatherWidget } from "./widgets/weather-widget"
import { TodoWidget } from "./widgets/todo-widget"
import { QuickLinksWidget } from "./widgets/quick-links-widget"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

const widgetComponents = {
  weather: WeatherWidget,
  todo: TodoWidget,
  quickLinks: QuickLinksWidget,
}

export function Dashboard() {
  const [widgets, setWidgets] = useState([
    { id: "weather", type: "weather" },
    { id: "todo", type: "todo" },
    { id: "quickLinks", type: "quickLinks" },
  ])

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newWidgets = Array.from(widgets)
    const [reorderedItem] = newWidgets.splice(result.source.index, 1)
    newWidgets.splice(result.destination.index, 0, reorderedItem)

    setWidgets(newWidgets)
  }

  const addWidget = (type) => {
    const newWidget = { id: `${type}-${Date.now()}`, type }
    setWidgets([...widgets, newWidget])
  }

  const removeWidget = (id) => {
    setWidgets(widgets.filter((widget) => widget.id !== id))
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Dashboard</h1>
      <div className="mb-4">
        <Button onClick={() => addWidget("weather")} className="mr-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Weather Widget
        </Button>
        <Button onClick={() => addWidget("todo")} className="mr-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Todo Widget
        </Button>
        <Button onClick={() => addWidget("quickLinks")}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Quick Links Widget
        </Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {widgets.map((widget, index) => {
                const WidgetComponent = widgetComponents[widget.type]
                return (
                  <Draggable key={widget.id} draggableId={widget.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-4 rounded-lg shadow"
                      >
                        <WidgetComponent onRemove={() => removeWidget(widget.id)} />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

