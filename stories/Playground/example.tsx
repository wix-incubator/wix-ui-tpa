/* tslint:disable */
import * as React from "react";

() => {
  const initialState = {
    selectedColorName: 'white',
    selectedSizeId: '0',

  };

  const [state, setState] = React.useReducer(
      (currentState, newState) => ({ ...currentState, ...newState }),
      initialState,
  );

  const PRODUCT_COLORS = {
    1: 'white',
    2: 'lightblue',
    3: '#ffcc66',
    4: '#00cc66',
  };

  return (
    <TPAComponentsProvider value={{ rtl: isRtl }}>
      <div
        style={{
          backgroundColor: 'white',
          width: '440px',
          boxSizing: 'border-box',
          padding: '20px',
        }}
      >
        <Card upgrade stacked>
          <Card.Container className="media">
            <Image
              width={400}
              height={520}
              src="c5f754_23cf5dfa1ea44dc09e87a03df0996f83~mv2.png"
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
                  onChange={({ value }) => setState({ selectedColorName: value })}
                >
                  <ColorPicker.Item
                    key={1}
                    aria-label="white color"
                    value={PRODUCT_COLORS[1]}
                    checked={state.selectedColorName === PRODUCT_COLORS[1]}
                  />
                  <ColorPicker.Item
                    key={2}
                    aria-label="light blue color"
                    value={PRODUCT_COLORS[2]}
                    checked={state.selectedColorName === PRODUCT_COLORS[2]}
                  />
                  <ColorPicker.Item
                    key={3}
                    aria-label="orange color"
                    value={PRODUCT_COLORS[3]}
                    checked={state.selectedColorName === PRODUCT_COLORS[3]}
                  />
                  <ColorPicker.Item
                    key={4}
                    aria-label="green color"
                    value={PRODUCT_COLORS[4]}
                    checked={state.selectedColorName === PRODUCT_COLORS[4]}
                  />
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
              <div style={{ marginTop: '16px' }}>
                <Button
                  aria-label="Add To Cart Button"
                  style={{ width: '100%', boxSizing: 'border-box' }}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          </Card.Container>
        </Card>
      </div>
    </TPAComponentsProvider>
  );
};
