const html = `<p>34</p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://img-pub-test.oss-cn-beijing.aliyuncs.com/public-files/17e671f31be3ee3.mp4"></iframe><p><br></p>`
const reg = /<iframe.*?class="ql-video".*?src=("|')(.+?)\1[^>]*><\/iframe>/g



console.log(reg.exec(html));
