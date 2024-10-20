import React from 'react';

const TypeInferenceDemo = () => {
  const jsArray = [1, 2, 3, 'four', true];

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Type Inference Demo (JS)</h3>
      <div>
        <h4 className="font-bold">JavaScript</h4>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify(jsArray, null, 2)}
        </pre>
        <p>Type: Array (no specific type information)</p>
      </div>
    </div>
  );
};

export default TypeInferenceDemo;