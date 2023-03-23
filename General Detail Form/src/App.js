import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./App.module.css";
import FormCard from "./Components/FormCard";
import FormComponent from "./Components/FormComponent";
import { GET_FORM_DATA } from "./Redux/Form/form.action";

function App() {
  const [data, setData] = useState([]);
  const { form_data, is_loading, is_error } = useSelector(
    (store) => store.GET_FormReducer
  );
    const { loading, error} = useSelector((store) => store.FormReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_FORM_DATA());
  }, [loading]);

  useEffect(() => {
    setData(form_data);
  }, [form_data]);



  return (
    <div className={Styles.App}>
      <FormComponent />
      <div className={Styles.Data_Container}>
        {data.map((el, i) => (
          <FormCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default App;
