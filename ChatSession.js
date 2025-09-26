let sessions = []
let sessionIdCounter = 1

export class ChatSession {
  static async create(data) {
    const session = {
      id: `session_${sessionIdCounter++}`,
      created_date: new Date().toISOString(),
      created_by: 'user@example.com',
      ...data
    }
    sessions.push(session)
    return session
  }

  static async list(orderBy = "-created_date", limit = 20) {
    let sortedSessions = [...sessions]
    
    if (orderBy.startsWith('-')) {
      const field = orderBy.substring(1)
      sortedSessions.sort((a, b) => new Date(b[field]) - new Date(a[field]))
    }
    
    return sortedSessions.slice(0, limit)
  }

  static async get(id) {
    return sessions.find(session => session.id === id)
  }

  static async update(id, data) {
    const session = sessions.find(s => s.id === id)
    if (session) {
      Object.assign(session, data)
    }
    return session
  }
}

export default ChatSession