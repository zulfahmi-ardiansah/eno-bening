AOS.init();
$.ajax({
    url: "https://api.karyakarsa.com/api/posts/enobening?page=1",
    success: function (result) {
        $("#article-content").html("");
        result.data.forEach((element, index) => {
            if (index < 3) {
                var dateArray = element.published_at.split(" ")[0].split("-");
                var monthArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
                var date = dateArray[2] + " " + monthArray[parseInt(dateArray[1]) - 1] + " " + dateArray[0];
                $("#article-content").append(`
                    <article  data-aos-delay="${100 + (200 * index)}" data-aos="fade-left" data-aos-duration="750">
                        <div class="article-thumbnail">
                            <span class="before"></span>
                            <img src="${element.featured_image}" alt="">
                            <span class="after"></span>
                        </div>
                        <div class="article-content">
                            <p class="article-paragraph">
                                <b class="article-title">
                                ${element.title}
                                </b>
                                ${date}
                            </p>
                        </div>
                    </article>
                `);
            }
        });
    }
})