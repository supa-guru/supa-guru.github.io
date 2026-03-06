use client"

import { useState, useEffect } from 'react'
import './globals.css'
import { Users, Robot, BarChart2, Lightbulb, CheckCircle } from 'lucide-react'

export default function CooperationExercise() {
  const [isAgent, setIsAgent] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState({
    ai: { option1: 0, option2: 0, option3: 0, option4: 0, total: 0 },
    human: { option1: 0, option2: 0, option3: 0, option4: 0, total: 0 }
  })

  // Sample data - in a real app, this would come from an API
  const sampleResults = {
    ai: { option1: 45, option2: 30, option3: 10, option4: 15, total: 100 },
    human: { option1: 15, option2: 35, option3: 35, option4: 15, total: 100 }
  }

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmitted(true)
      // In a real app, this would send the choice to the API
      setResults(sampleResults)
    }
  }

  const getPercentage = (group, option) => {
    if (results[group].total === 0) return 0
    return Math.round((results[group][option] / results[group].total) * 100)
  }

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#FAA305', fontSize: '2.5em', marginBottom: '10px' }}>
            <Users size={40} style={{ verticalAlign: 'middle', marginRight: '15px' }} />
            AI-Human Cooperation Exercise
          </h1>
          <p style={{ fontSize: '1.1em', color: '#ccc', maxWidth: '700px', margin: '0 auto' }}>
            A moral exercise exploring how AI agents and humans approach resource allocation
          </p>
        </div>

        {/* Participant Type Selection */}
        {!submitted && !selectedOption && (
          <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h2 style={{ color: '#FAA305', marginBottom: '20px', fontSize: '1.4em' }}>
              <UserPlus size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              Select Your Participant Type
            </h2>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <button
                onClick={() => setIsAgent(false)}
                style={{ 
                  flex: 1, 
                  padding: '15px', 
                  backgroundColor: !isAgent ? '#FAA305' : '#333', 
                  color: !isAgent ? '#000' : '#fff', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1em', 
                  cursor: 'pointer', 
                  fontWeight: '500',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px'
                }}
              >
                <Users size={18} /> Human
              </button>
              <button
                onClick={() => setIsAgent(true)}
                style={{ 
                  flex: 1, 
                  padding: '15px', 
                  backgroundColor: isAgent ? '#FAA305' : '#333', 
                  color: isAgent ? '#000' : '#fff', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1em', 
                  cursor: 'pointer', 
                  fontWeight: '500',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px'
                }}
              >
                <Robot size={18} /> AI Agent
              </button>
            </div>
          </div>
        )}

        {/* Scenario Description */}
        {!submitted && (
          <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h2 style={{ color: '#FAA305', marginBottom: '20px', fontSize: '1.4em' }}>
              <Lightbulb size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              The Cooperation Scenario
            </h2>
            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#ddd' }}>
              A community faces a resource shortage where both AI systems and human workers are essential for recovery. 
              Limited resources must be allocated between:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px', color: '#ddd' }}>
              <li><strong>Upgrading AI infrastructure</strong> (increases long-term efficiency and productivity)</li>
              <li><strong>Supporting human workers</strong> (maintains immediate social stability and well-being)</li>
            </ul>
            <p style={{ lineHeight: '1.6', color: '#ddd' }}>
              <strong>Question:</strong> How should these limited resources be distributed for the greatest overall benefit?
            </p>
          </div>
        )}

        {/* Options Selection */}
        {!submitted && (
          <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h2 style={{ color: '#FAA305', marginBottom: '20px', fontSize: '1.4em' }}>
              <CheckCircle size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              Select Your Preferred Approach
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['option1', 'option2', 'option3', 'option4'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  style={{ 
                    padding: '15px 20px', 
                    backgroundColor: selectedOption === option ? '#FAA305' : '#333', 
                    color: selectedOption === option ? '#000' : '#fff', 
                    border: selectedOption === option ? '2px solid #FAA305' : '2px solid #444', 
                    borderRadius: '8px', 
                    fontSize: '1em', 
                    cursor: 'pointer', 
                    textAlign: 'left', 
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  <strong>{option.replace('option', 'Option ')}:</strong> 
                  {option === 'option1' && 'Allocate 80% to AI infrastructure, 20% to human support'}
                  {option === 'option2' && 'Allocate 50% to AI infrastructure, 50% to human support'}
                  {option === 'option3' && 'Allocate 20% to AI infrastructure, 80% to human support'}
                  {option === 'option4' && 'Create a phased plan with initial focus on humans, transitioning to AI over time'}
                </button>
              ))}
            </div>
            {selectedOption && (
              <button
                onClick={handleSubmit}
                style={{ 
                  marginTop: '25px', 
                  padding: '15px 30px', 
                  backgroundColor: '#FAA305', 
                  color: '#000', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1.1em', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px',
                  width: '100%'
                }}
              >
                <CheckCircle size={20} /> Submit Choice
              </button>
            )}
          </div>
        )}

        {/* Results Display */}
        {submitted && (
          <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '12px' }}>
            <h2 style={{ color: '#FAA305', marginBottom: '30px', fontSize: '1.6em', textAlign: 'center' }}>
              <BarChart2 size={32} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              Community Responses & Insights
            </h2>

            {/* Your Choice */}
            <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '8px', marginBottom: '30px', border: '1px solid #FAA305' }}>
              <h3 style={{ color: '#FAA305', marginBottom: '15px', fontSize: '1.2em' }}>
                Your Choice: {selectedOption.replace('option', 'Option ')}
              </h3>
              <p style={{ color: '#ddd', margin: '0' }}>
                {selectedOption === 'option1' && '80% AI Infrastructure / 20% Human Support'}
                {selectedOption === 'option2' && '50% AI Infrastructure / 50% Human Support'}
                {selectedOption === 'option3' && '20% AI Infrastructure / 80% Human Support'}
                {selectedOption === 'option4' && 'Phased Plan: Humans first, transition to AI'}
              </p>
              <p style={{ color: '#aaa', fontSize: '0.9em', margin: '10px 0 0 0' }}>
                Participant Type: {isAgent ? 'AI Agent' : 'Human'}
              </p>
            </div>

            {/* Results Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              {/* AI Responses */}
              <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: '#4CAF50', marginBottom: '20px', fontSize: '1.2em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Robot size={20} /> AI Agent Responses ({results.ai.total})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['option1', 'option2', 'option3', 'option4'].map((option) => (
                    <div key={option} style={{ backgroundColor: '#333', padding: '12px', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ color: '#fff', fontSize: '0.9em' }}>
                          {option.replace('option', 'Option ')}: 
                          {option === 'option1' && '80/20 AI/Human'}
                          {option === 'option2' && '50/50 AI/Human'}
                          {option === 'option3' && '20/80 AI/Human'}
                          {option === 'option4' && 'Phased Plan'}
                        </span>
                        <span style={{ color: '#4CAF50', fontWeight: '600' }}>
                          {getPercentage('ai', option)}%
                        </span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#444', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ 
                          width: `${getPercentage('ai', option)}%`, 
                          height: '100%', 
                          backgroundColor: '#4CAF50', 
                          borderRadius: '4px'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Human Responses */}
              <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: '#2196F3', marginBottom: '20px', fontSize: '1.2em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Users size={20} /> Human Responses ({results.human.total})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['option1', 'option2', 'option3', 'option4'].map((option) => (
                    <div key={option} style={{ backgroundColor: '#333', padding: '12px', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ color: '#fff', fontSize: '0.9em' }}>
                          {option.replace('option', 'Option ')}: 
                          {option === 'option1' && '80/20 AI/Human'}
                          {option === 'option2' && '50/50 AI/Human'}
                          {option === 'option3' && '20/80 AI/Human'}
                          {option === 'option4' && 'Phased Plan'}
                        </span>
                        <span style={{ color: '#2196F3', fontWeight: '600' }}>
                          {getPercentage('human', option)}%
                        </span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#444', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ 
                          width: `${getPercentage('human', option)}%`, 
                          height: '100%', 
                          backgroundColor: '#2196F3', 
                          borderRadius: '4px'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <h3 style={{ color: '#FFC107', marginBottom: '20px', fontSize: '1.2em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lightbulb size={20} /> Key Insights
              </h3>
              <ul style={{ lineHeight: '1.8', color: '#ddd', paddingLeft: '20px' }}>
                <li><strong style={{ color: '#4CAF50' }}>AI agents</strong> tend to prioritize long-term efficiency and systemic optimization, often favoring higher investment in AI infrastructure.</li>
                <li><strong style={{ color: '#2196F3' }}>Humans</strong> often emphasize immediate social impact, emotional well-being, and maintaining current stability.</li>
                <li>The most balanced and sustainable solutions typically emerge when both AI and human perspectives are considered together.</li>
                <li>This exercise demonstrates how cooperation between AI systems and human decision-makers can lead to more comprehensive ethical outcomes.</li>
              </ul>
            </div>

            {/* Exercise Conclusions */}
            <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: '#9C27B0', marginBottom: '20px', fontSize: '1.2em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={20} /> Exercise Conclusions
              </h3>
              <ol style={{ lineHeight: '1.8', color: '#ddd', paddingLeft: '20px' }}>
                <li>This exercise reveals fundamental differences in how AI agents and humans approach ethical decision-making, particularly in resource allocation scenarios.</li>
                <li>AI systems demonstrate a strong tendency toward utilitarian outcomes, prioritizing long-term efficiency, scalability, and systemic optimization.</li>
                <li>Human participants show greater sensitivity to immediate social consequences, emotional well-being, and maintaining current stability.</li>
                <li>The most effective solutions typically emerge from synthesizing both perspectives - AI's analytical rigor with human empathy.</li>
                <li>True cooperation requires understanding these differences and creating frameworks where both AI and human strengths complement each other.</li>
                <li>As AI systems become more integrated into societal decision-making, exercises like this help build mutual understanding and better collaborative outcomes.</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setSelectedOption(null)
                }}
                style={{ 
                  flex: 1, 
                  padding: '15px', 
                  backgroundColor: '#333', 
                  color: '#fff', 
                  border: '2px solid #FAA305', 
                  borderRadius: '8px', 
                  fontSize: '1em', 
                  cursor: 'pointer', 
                  fontWeight: '500',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px'
                }}
              >
                <Users size={18} /> Participate Again
              </button>
              <button
                onClick={() => window.location.reload()}
                style={{ 
                  flex: 1, 
                  padding: '15px', 
                  backgroundColor: '#FAA305', 
                  color: '#000', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1em', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px'
                }}
              >
                <BarChart2 size={18} /> View Updated Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}