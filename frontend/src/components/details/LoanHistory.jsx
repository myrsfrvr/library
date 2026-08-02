function LoanHistory({ loans }) {
  return (
    <>
      <div className="details__loan-dates">Loans</div>

      <table className="details__loan-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Borrowed On</th>
            <th>Return By</th>
          </tr>
        </thead>

        <tbody>
          {loans.length === 0 ? (
            <tr>
              <td colSpan="3">No loans recorded</td>
            </tr>
          ) : (
            loans.map((loanDate, index) => {
              const borrowed = new Date(loanDate);

              const returned = new Date(loanDate);

              returned.setDate(returned.getDate() + 14);

              return (
                <tr key={loanDate}>
                  <td>{index + 1}</td>

                  <td>
                    {borrowed.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </td>

                  <td>
                    {returned.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}

export default LoanHistory;
