

function Square({value, OnClick} : {value: string|null, OnClick: () => void}) {
  const buttonClass = value === 'X' ? 'btn-danger' : value === 'O' ? 'btn-success' : 'btn-light';
  return (
    <button
      type="button"
      className={`btn ${buttonClass} btn-lg squareButton`}
      onClick={OnClick}
    >
      {value}
    </button>
  );
}

export default Square