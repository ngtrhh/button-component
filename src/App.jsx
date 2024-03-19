import Button from "./components/Button";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="main__title">Buttons</div>

        <div className="main__content">
          <div className="main__content__row">
            <div className="main__content__row__item">
              {/*button*/}
              <p className="main__content__row__item__content">
                {"<Button />"}
              </p>
              <Button />
            </div>

            {/*button &:hover, &:focus*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                &:hover, &:focus
              </p>
              <Button />
            </div>
          </div>

          <div className="main__content__row">
            {/*outline*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button variant=”outline” />"}
              </p>
              <Button variant="outline" />
            </div>

            {/*outline &:hover, &:focus*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                &:hover, &:focus
              </p>
              <Button variant="outline" />
            </div>
          </div>

          <div className="main__content__row">
            {/*text*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button variant=”text” />"}
              </p>
              <Button variant="text" />
            </div>

            {/*text &:hover, &:focus*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button variant=”text” />"}
              </p>
              <Button variant="text" />
            </div>
          </div>

          <div className="main__content__row">
            {/*disableShadow*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button disableShadow />"}
              </p>
              <Button disableShadow />
            </div>
          </div>

          <div className="main__content__row">
            {/*disabled*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button disabled />"}
              </p>
              <Button disabled />
            </div>

            {/*text disabled*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button variant=”text” disabled />"}
              </p>
              <Button variant="text" disabled />
            </div>
          </div>

          <div className="main__content__row">
            {/*startIcon*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button startIcon=”local_grocery_store” />"}
              </p>
              <Button
                color="primary"
                startIcon={() => <MdOutlineLocalGroceryStore size={20} />}
              />
            </div>

            {/*endIcon*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button endIcon=”local_grocery_store” />"}
              </p>
              <Button
                color="primary"
                endIcon={() => <MdOutlineLocalGroceryStore size={20} />}
              />
            </div>
          </div>

          <div className="main__content__row">
            {/*size="sm"*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button size=”sm” />"}
              </p>
              <Button color="primary" size="sm" />
            </div>

            {/*size="md*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button size=md />"}
              </p>
              <Button color="primary" />
            </div>

            {/*size="lg*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button size=”lg” />"}
              </p>
              <Button color="primary" size="lg" />
            </div>
          </div>

          <div className="main__content__row">
            {/*color=”default”*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button color=”default” />"}
              </p>
              <Button />
            </div>

            {/*color=”primary”*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button color=”primary” />"}
              </p>
              <Button color="primary" />
            </div>

            {/*color=”secondary”*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button color=”secondary” />"}
              </p>
              <Button color="secondary" />
            </div>

            {/*color=”danger”*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"<Button color=”danger” />"}
              </p>
              <Button color="danger" />
            </div>
          </div>

          <div className="main__content__row">
            {/*&:hover, &:focus*/}
            <div className="main__content__row__item">
              <p className="main__content__row__item__content">
                {"&:hover, &:focus"}
              </p>
              <Button />
            </div>

            <div className="main__content__row__item">
              <p className="main__content__row__item__content"></p>
              <Button color="primary" />
            </div>

            <div className="main__content__row__item">
              <p className="main__content__row__item__content"></p>
              <Button color="secondary" />
            </div>

            <div className="main__content__row__item">
              <p className="main__content__row__item__content"></p>
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
