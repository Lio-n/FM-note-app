import { FormEvent, FormEventHandler } from "react";
import { CircleButton } from "../../ui/atoms/buttons/circle.button";
import { Input } from "../../ui/atoms/inputs/basic.input";
import CONSTANTS from "../../test/constants.test";

const FormTodo = () => {
  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = e.target;
    console.log(text);
  };

  return (
    <form data-testid={CONSTANTS.COMPONENT.TODO_FORM.TEST_ID_TODO_FORM} onSubmit={handleSubmit}>
      <Input name="text" required placeholder="Create a new todo..." />
      <CircleButton type="submit" ariaLabel={"Submit button"} />
    </form>
  );
};

export default FormTodo;
