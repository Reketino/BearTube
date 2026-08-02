import { useEffect, useState } from "react";

import {
  getSettings,
  updateSettings,
  resetSettings,
} from "../../storage/settings";

import type { BearTubeSettings } from "../../types/settings";

export function useSettings() {
  const [settings, setSettings] = useState<BearTubeSettings | null>(null);

  useEffect(() => {
    async function loadSettings() {
      const data = await getSettings();
      setSettings(data);
    }

    void loadSettings();
  }, []);

  async function update<K extends keyof BearTubeSettings>(
    key: K,
    value: BearTubeSettings[K],
  ) {
    await updateSettings({
      [key]: value,
    });

    setSettings((previous) =>
      previous
        ? {
            ...previous,
            [key]: value,
          }
        : previous,
    );
  }

  async function reset() {
    await resetSettings();

    const data = await getSettings();
    setSettings(data);
  }

  return {
    settings,
    update,
    reset,
  };
}
