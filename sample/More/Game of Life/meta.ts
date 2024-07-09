export default {
  name: 'Game Of Life',
  description: 'just for fun.',
  filename: __DIRNAME__,
  sources: [
    { path: 'main.ts' },
    { path: 'cell_shader.wgsl' },
    { path: 'life_sim_shader.wgsl' },
  ],
};
