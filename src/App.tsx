import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  name: string;
  age: number;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={(e) => void handleSubmit(onSubmit, onError)(e)}>
      <label>
        {" "}
        <input type="text" {...register("name", { required: true })} />
        {errors.name ? errors.name.type : ""}
      </label>

      <input type="number" {...register("age")} />
      <button>Submit</button>
    </form>
  );
}

export default App;
