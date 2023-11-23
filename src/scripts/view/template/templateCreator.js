const vehicleItem = (vehicle) => {
  return `
    <div class="vehicleItem" id="vehicleItem">
        <section class="topCard"></section>
        <section class="descCard"></section>
    </div>
    `;
};

const vehicleDetail = (vehicle) => {
  return `
    <article id="vehicleDetail" class="vehicleDetail">
        <div class="detailHeader"></div>
        <div class="detailDesc"></div>
        <div class="detailInfo"></div>
    </article>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

module.exports = {
  vehicleItem,
  vehicleDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
