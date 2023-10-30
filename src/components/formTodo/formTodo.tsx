import { FormEvent, FormEventHandler } from "react";
import { CircleButton } from "../../ui/atoms/buttons/circle.button";
import { Input } from "../../ui/atoms/inputs/basic.input";
import CONSTANTS from "../../test/constants";
import CardLayout from "../../ui/atoms/layouts/card.layout";
import { useNotes } from "../../lib/hooks";
import generateRandomId from "../../utils/generateRandomId";

const FormTodo = () => {
  const [data, setData] = useNotes();

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentFormData = new FormData(e.currentTarget);

    if (currentFormData.get("text")) {
      const newNote = { id: generateRandomId(), text: currentFormData.get("text") as string, isCompleted: false };

      setData([...data, newNote]);
      e.currentTarget.reset();
    }
  };

  return (
    <form data-testid={CONSTANTS.COMPONENT.TODO_FORM.TEST_ID_TODO_FORM} onSubmit={handleSubmit}>
      <CardLayout className="--box-shadow">
        <CircleButton type="submit" ariaLabel={"Submit button"} />
        <Input name="text" required placeholder="Create a new todo..." />
      </CardLayout>
    </form>
  );
};

export default FormTodo;
