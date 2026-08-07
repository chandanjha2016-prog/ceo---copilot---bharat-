
import { useState } from 'react'

export default function Home() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const askCEO = () => {
    setLoading(true)
    setTimeout(() => {
      setAnswer("1. Sales 15% gire. Ye 3 client ko call karo.\n2. Marketing budget 20% kam karo.\n3. Kal 11 baje Team meeting fix karo.")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold">CEO COPILOT <span className="text-yellow-400">BHARAT</span></h1>
        <p className="text-xl mt-4 text-gray-300">Aapka 24x7 AI CEO. 1 Sec me Decision.</p>
        
        <input 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Aaj kya karu Sir?"
          className="mt-6 w-full max-w-xl p-4 rounded-lg text-black"
        />
        <button 
          onClick={askCEO}
          className="mt-4 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold"
        >
          {loading ? "Soch raha hun..." : "Pucho"}
        </button>

        {answer && (
          <div className="mt-8 bg-gray-800 p-6 rounded-xl max-w-2xl mx-auto text-left whitespace-pre-line">
            <h3 className="font-bold text-yellow-400">AI CEO ka Jawab:</h3>
            <p>{answer}</p>
          </div>
        )}
      </section>
      <footer className="text-center text-sm text-gray-500 py-8">
        © 2026 CEO COPILOT BHARAT. Made by AI App Factory.
      </footer>
    </div>
  )
}
