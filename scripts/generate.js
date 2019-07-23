const prompts = require('prompts');
const spawn = require('child_process').spawn;

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
    console.error('Aborted');
    process.exit(1);
  },
};

async function main() {
  const answers = await prompts(questions, handlers);
  try {
    const generation = spawn(
      'npm',
      ['run', `generate:component${answers.mobile ? ':mobile' : ''}`],
      { detached: false, stdio: 'inherit' },
    );
    generation.on('close', code => {
      if (code !== 0) {
        process.exit(code);
      }
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main()
  .then(() => {})
  .catch(() => {
    console.error('generate failed');
  });
