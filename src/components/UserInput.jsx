export default function UserInput({ onChangeUserInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserInput("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserInput("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserInput("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserInput("duration", event.target.value)
            }
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
