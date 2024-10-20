import React, { useState } from 'react';

const AutocompleteDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const tasks: string[] = ['Buy groceries', 'Clean house', 'Walk dog', 'Pay bills'];

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Autocomplete Demo (TS)</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a task..."
        className="border p-2 w-full mb-2"
      />
      <ul className="bg-gray-100 p-2 rounded">
        {tasks
          .filter(task => task.toLowerCase().includes(inputValue.toLowerCase()))
          .map(task => (
            <li key={task} className="cursor-pointer hover:bg-gray-200 p-1">
              {task}
            </li>
          ))
        }
      </ul>
      <p className="mt-2">
        TypeScript provides enhanced autocompletion and type checking.
      </p>
    </div>
  );
};

export default AutocompleteDemo;