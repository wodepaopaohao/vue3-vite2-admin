import { createApp } from 'vue';
import SvgIcon from '@/components/svg-icon/index.vue'; // svg component
const requireAll = function(requireContext: any) {
  return Object.keys(requireContext).map(key => requireContext[key]);
};
const req = import.meta.globEager('./svg/*.svg') ;

requireAll(req);

export default function(app: ReturnType<typeof createApp>) {
  app.component('SvgIcon', SvgIcon);
}
