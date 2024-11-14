import KanbanBoard from '@/components/KanbanBoard/Board'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">칸반 보드</h1>
      <KanbanBoard />
    </main>
  )
}
