## NewCard
An implementation of an NewCard for TPAs

How to use it:

1. Create your stylable file (e.g. MyComponent.st.css)
 ``` css
    :import {
         -st-from: '../NewCard.st.css';
        -st-default: NewCard;
    }

    .myComponent {
        -st-extends: NewCard;

        ....
    }

    .myComponent::container {
        padding: 30px;

        ...
    }
```

``` javascript
    import NewCard from 'wix-ui-tpa/NewCard';
    import { classes } from './MyComponent.st.css';

    const MyComponent = (props) => (
        <div className={classes.root} >
            <NewCard>
                <NewCard.Container className={classes.media}>
                    Put whatever you want 😍
                </NewCard.Container>
                <NewCard.Container className={classes.info}>
                    Put whatever you want 😍
                </NewCard.Container>
            </NewCard>
        </div>);
    ```
