const incomeImage = "/src/assets/images/income-graph.png";
const Icome = () => {
  return (
    <>
      <div>
        <h1>Income</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <img className="reviewsImage" src={incomeImage} alt="reviews" />
      <div>
        <h2>Your Transactions(<strong>3</strong>)</h2>
        <div className="div-income-container">
          <div className="div-income">
            <p>$720</p> <span>1/12/2022</span>
          </div>
          <div className="div-income">
            <p>$560</p> <span>1/1/2022</span>
          </div>

          <div className="div-income">
            <p>$960</p> <span>11/12/2021</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icome;
