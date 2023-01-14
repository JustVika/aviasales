class ServerTickets {
  constructor() {
    this.id = ''
    this.tickets = []
  }

  createSession = async () => {
    const res = await fetch('https://aviasales-test-api.kata.academy/search')

    const body = await res.json()

    this.id = body.searchId
  }

  getTickets = async () => {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${this.id}`)

    if (res.status === 500) {
      return { stop: false }
    }

    const body = await res.json()

    return {
      tickets: body.tickets,
      stop: body.stop,
    }
  }
}
export default ServerTickets
