/* eslint-disable no-unused-vars */
import { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleRunCode = async () => {
    try {
        const response = [];
    //   const response = await axios.post('http://localhost:5000/run-code', { code });
      setOutput(response.data.output);
    } catch (err) {
      setError('Error running code');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-4">AI Python Tutor</h1>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 mb-4"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your Python code here"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={handleRunCode}
      >
        Run Code
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <h3 className="text-xl">Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
