/* tslint:disable */
import * as React from "react";

() => {
  const initialState = {
    selectedColor: 'white',
    selectedSizeId: '0',

  };

  const [state, setState] = React.useReducer(
      (currentState, newState) => ({ ...currentState, ...newState }),
      initialState,
  );

  return (
      <div style={{ backgroundColor: 'white', width: '440px', boxSizing: 'border-box', padding: '20px' }}>
        <Card
            upgrade
            stacked
        >
            <Card.Container className="media">
                <Image
                    width={400}
                    height={520}
                    src="./product.png"
                    alt="Product Image"
                />
            </Card.Container>
            <Card.Container className="info">
                <div>
                    <div style={{ marginTop: '12px', marginBottom: '5px' }}>
                        <Text typography={TYPOGRAPHY.smallTitle}>Product Name</Text>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Text>$49.99</Text>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <ColorPicker
                            aria-label="Color Picker"
                            value={state.selectedColor}
                            onChange={({ value }) => console.log(value)}
                        >
                            <ColorPicker.Item aria-label="white color" value="white" />
                            <ColorPicker.Item
                                aria-label="light blue color"
                                value="lightblue"
                            />
                            <ColorPicker.Item aria-label="third color" value="#ffcc66" />
                            <ColorPicker.Item aria-label="fourth color" value="#00cc66" />
                        </ColorPicker>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        <Dropdown
                            upgrade
                            placeholder="Choose Size"
                            options={[
                                { id: '0', value: 'XSmall', isSelectable: true },
                                { id: '1', value: 'Small', isSelectable: true },
                                { id: '2', value: 'Medium', isSelectable: true },
                                { id: '3', value: 'Large', isSelectable: true },
                                { id: '4', value: 'XLarge', isSelectable: false },
                            ]}
                            aria-label="Sizes Dropdown"
                            onChange={selectedOption =>
                                setState({ selectedSizeId: selectedOption.id })
                            }
                        />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <Button aria-label="Add To Cart Button" style={{ width: '100%', boxSizing: 'border-box' }} >ADD TO CART</Button>
                    </div>
                </div>
            </Card.Container>
        </Card>
      </div>
  );
};
