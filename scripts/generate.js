const prompts = require('prompts');

async function main() {
  let promptAborted = false;

  const questions = [
    {
      type: 'confirm',
      name: 'mobile',
      message: 'Does the new component have a specific mobile design?',
      initial: false,
    },
  ];

  const handlers = {
    onCancel: () => {
      promptAborted = true;
    },
  };

  const answers = await prompts(questions, handlers);

  if (promptAborted) {
    console.error('Aborted.');
    process.exit(1);
  }

  if (answers.mobile) {
    process.exit(101);
  } else {
    process.exit(102);
  }
}

main()
  .then(() => {})
  .catch(() => {
    console.error('generate failed');
  });
