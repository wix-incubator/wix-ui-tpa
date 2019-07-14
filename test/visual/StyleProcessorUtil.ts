import styleProcessor from 'wix-style-processor';

let styleProcessorPromise;

export function init(): void {
  styleProcessorPromise = styleProcessor.init();
}

export function onStyleProcessorDone(): Promise<void> {
  if (!styleProcessorPromise) {
    throw new Error("styleProcessor hasn't been initiated");
  }

  return styleProcessorPromise;
}
