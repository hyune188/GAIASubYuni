from scipy.signal import convolve2d as conv2
from skimage import color, data, restoration
import matplotlib.pyplot as plt
import numpy as np

rng = np.random.default_rng()

astro = color.rgb2gray(data.astronaut())

psf = np.ones((5, 5)) / 25

astro = conv2(astro, psf, 'same')

astro += 0.1 * astro.std() * rng.standard_normal(astro.shape)

deconvolved, _ = restoration.unsupervised_wiener(astro, psf)

fig, ax = plt.subplots(nrows=1, ncols=2, figsize=(8, 5), sharex=True, sharey=True)

plt.gray()

ax[0].imshow(astro, vmin=deconvolved.min(), vmax=deconvolved.max())
ax[0].axis('off')
ax[0].set_title('Restored (Wiener)')

fig.tight_layout()
plt.show()