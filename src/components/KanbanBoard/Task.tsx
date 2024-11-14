'use client'

import { useDraggable } from '@dnd-kit/core'
import { Task } from '@/types'

interface Props {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: task
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white p-4 rounded-lg shadow border border-gray-200 cursor-move hover:shadow-md transition-shadow"
    >
      <p className="text-gray-800">{task.title}</p>
    </div>
  )
} 