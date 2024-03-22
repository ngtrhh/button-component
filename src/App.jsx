import Button from "./components/Button";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="title">Buttons</div>

        <div className="content">
          <div className="row">
            {/*button*/}
            <div className="item">
              <p>{"<Button />"}</p>
              <Button />
            </div>
          </div>

          <div className="row">
            {/*outline*/}
            <div className="item">
              <p>{"<Button variant=”outline” />"}</p>
              <Button variant="outline" />
            </div>
          </div>

          <div className="row">
            {/*text*/}
            <div className="item">
              <p>{"<Button variant=”text” />"}</p>
              <Button variant="text" />
            </div>
          </div>

          <div className="row">
            {/*disableShadow*/}
            <div className="item">
              <p>{"<Button disableShadow />"}</p>
              <Button disableShadow />
            </div>
          </div>

          <div className="row">
            {/*disabled*/}
            <div className="item">
              <p>{"<Button disabled />"}</p>
              <Button disabled />
            </div>

            {/*text disabled*/}
            <div className="item">
              <p>{"<Button variant=”text” disabled />"}</p>
              <Button variant="text" disabled />
            </div>
          </div>

          <div className="row">
            {/*startIcon*/}
            <div className="item">
              <p>{"<Button startIcon=”local_grocery_store” />"}</p>
              <Button
                color="primary"
                startIcon={() => (
                  <span class="material-symbols-outlined">
                    local_grocery_store
                  </span>
                )}
              />
            </div>

            {/*endIcon*/}
            <div className="item">
              <p>{"<Button endIcon=”local_grocery_store” />"}</p>
              <Button
                color="primary"
                endIcon={() => (
                  <span class="material-symbols-outlined">
                    local_grocery_store
                  </span>
                )}
              />
            </div>
          </div>

          <div className="row">
            {/*size="sm"*/}
            <div className="item">
              <p>{"<Button size=”sm” />"}</p>
              <Button color="primary" size="sm" />
            </div>

            {/*size="md*/}
            <div className="item">
              <p>{"<Button size=md />"}</p>
              <Button color="primary" />
            </div>

            {/*size="lg*/}
            <div className="item">
              <p>{"<Button size=”lg” />"}</p>
              <Button color="primary" size="lg" />
            </div>
          </div>

          <div className="row">
            {/*color=”default”*/}
            <div className="item">
              <p>{"<Button color=”default” />"}</p>
              <Button />
            </div>

            {/*color=”primary”*/}
            <div className="item">
              <p>{"<Button color=”primary” />"}</p>
              <Button color="primary" />
            </div>

            {/*color=”secondary”*/}
            <div className="item">
              <p>{"<Button color=”secondary” />"}</p>
              <Button color="secondary" />
            </div>

            {/*color=”danger”*/}
            <div className="item">
              <p>{"<Button color=”danger” />"}</p>
              <Button color="danger" />
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Icons: https://material.io/resources/icons/?style=round</p>
          <p id="credit">
            created by <b>Nguyen Ngoc Trinh</b> - devChallenges.io
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
