'use client'

import { useDroppable } from '@dnd-kit/core'
import TaskCard from './Task'
import { Column } from '@/types'

interface Props {
  column: Column
}

export default function KanbanColumn({ column }: Props) {
  const { setNodeRef } = useDroppable({
    id: column.id
  })

  return (
    <div
      ref={setNodeRef}
      className="w-80 bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">{column.title}</h2>
        <span className="text-gray-500 text-sm">{column.tasks.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {column.tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
} 