// absolute
import { render } from "@testing-library/react";

// components
import CharacterTemplate from "@templates/Character";

// mock
import { data } from "@mock/singleCharacter.json";

describe("Character template", () => {
  it("snapshot", () => {
    const { container } = render(<CharacterTemplate title="test" data={data} />);
    expect(container).toMatchSnapshot();
  });
});
