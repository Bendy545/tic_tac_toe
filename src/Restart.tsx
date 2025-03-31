import * as React from 'react';

interface RestartProps {
  OnClick: () => void
}

const Restart: React.FC<RestartProps> = ({OnClick}: RestartProps) => {

  return (
    <button  className="btn p-3 text-black mt-3 btn-lg bg-warning shadow-lg rounded-5" onClick={OnClick}>Restart</button>
  )
}

export default Restart