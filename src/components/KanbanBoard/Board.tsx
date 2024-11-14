'use client'

import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'
import { useState } from 'react'
import { Column, Status, Task } from '@/types'
import KanbanColumn from './Column'

const defaultColumns: Column[] = [
  {
    id: 'todo',
    title: '할 일',
    tasks: [
      { id: '1', title: '프로젝트 기획하기', status: 'todo' },
      { id: '2', title: '디자인 시안 만들기', status: 'todo' },
    ]
  },
  {
    id: 'in-progress',
    title: '진행 중',
    tasks: []
  },
  {
    id: 'done',
    title: '완료',
    tasks: []
  }
]

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(defaultColumns)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    
    if (!over) return

    const activeTask = active.data.current as Task
    const overId = over.id as Status

    if (activeTask.status !== overId) {
      setColumns(columns => {
        return columns.map(col => {
          // Remove from old column
          if (col.id === activeTask.status) {
            return {
              ...col,
              tasks: col.tasks.filter(task => task.id !== activeTask.id)
            }
          }
          // Add to new column
          if (col.id === overId) {
            return {
              ...col,
              tasks: [...col.tasks, { ...activeTask, status: overId }]
            }
          }
          return col
        })
      })
    }
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4">
        {columns.map(column => (
          <KanbanColumn
            key={column.id}
            column={column}
          />
        ))}
      </div>
    </DndContext>
  )
} 