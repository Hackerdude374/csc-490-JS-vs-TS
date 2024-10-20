import React from 'react';

const TypeInferenceDemo: React.FC = () => {
  const tsArray: (number | string | boolean)[] = [1, 2, 3, 'four', true];

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Type Inference Demo (TS)</h3>
      <div>
        <h4 className="font-bold">TypeScript</h4>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify(tsArray, null, 2)}
        </pre>
        <p>Type: (number | string | boolean)[]</p>
      </div>
    </div>
  );
};

export default TypeInferenceDemo;