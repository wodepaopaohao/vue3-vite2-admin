import { createApp } from 'vue';

/** 加载插件文件 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = import.meta.globEager('./*.ts');
  Object.keys(files).forEach((key: any) => {
    if (typeof files[key].default === 'function') {
      if (key !== './index.ts') files[key].default(app);
    }
  });
}
