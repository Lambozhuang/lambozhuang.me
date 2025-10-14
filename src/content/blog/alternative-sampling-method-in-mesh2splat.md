---
pubDatetime: 2025-09-09
title: Alternative sampling method in Mesh2Splat
featured: false
draft: false
tags:
  - project
  - 3d-gaussian-splatting
  - computer-graphics
  - 3d-rendering
ogImage: https://lambozhuangme.blob.core.windows.net/blog-images/alternative-sampling-method-in-mesh2splat/1.png
description:
  An alternative sampling method in Mesh2Splat to improve the rendering quality in some scenarios for synthetic 3DGS models. This is a project that I have done in the DH2323 computer graphics and interaction course at KTH.
---

<img src="https://lambozhuangme.blob.core.windows.net/blog-images/alternative-sampling-method-in-mesh2splat/1.png" class="mx-auto" alt="1">

As part of the DH2323 Computer Graphics and Interaction course at KTH, I explored ways to improve Mesh2Splat, a fast surface splatting technique used to convert 3D meshes into 3D Gaussian splats.

[The original Mesh2Splat](https://github.com/electronicarts/mesh2splat) relies on OpenGL’s rasterizer for sampling points on a triangle’s surface. While efficient, it can produce jagged edges and distorted points—especially on tilted triangles—because of its grid-based sampling.

Our approach introduced barycentric coordinate sampling to generate uniformly distributed points across each triangle. This alternative method reduced jagged edges for converted triangles and (somewhat) improved the visual quality of the splatted models. However, one of the problems of our method is that for triangles that are too narrow, the sampling points can still be unevenly distributed, leading to artifacts in the final rendering. The CPU implementation was only a proof-of-concept, since this could be further optimized using GPU compute shaders. 

🔗 [GitHub Link](https://github.com/Lambozhuang/mesh2splat)

🔗 [Read the full project report](https://github.com/Lambozhuang/mesh2splat/blob/main/DH2323ProjectReport.pdf) (PDF)