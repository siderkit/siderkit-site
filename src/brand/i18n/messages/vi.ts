import type { Messages } from './types';

export const vi = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — Làm việc, như lẽ ra phải vậy.',
    homeDescription:
      'Một dự án độc lập, mã nguồn mở, làm những công cụ tĩnh lặng, ưu tiên dữ liệu tại máy, và để lại khoảng riêng cho người sử dụng.',
    privacyTitle: 'Quyền riêng tư — Siderkit',
    privacyDescription: 'Trang web Siderkit và các ứng dụng Siderkit xử lý dữ liệu thế nào.',
    termsTitle: 'Điều khoản — Siderkit',
    termsDescription: 'Các điều khoản áp dụng cho trang web Siderkit và các ứng dụng Siderkit.',
    licensesTitle: 'Giấy phép — Siderkit',
    licensesDescription: 'Giấy phép cho các ứng dụng Siderkit, trang web này, và tài nguyên đi kèm.',
    securityTitle: 'Bảo mật — Siderkit',
    securityDescription: 'Cách báo cáo vấn đề bảo mật trong một ứng dụng Siderkit hoặc trang web này.',
    aboutTitle: 'Giới thiệu — Siderkit',
    aboutDescription:
      'Siderkit là một dự án độc lập, mã nguồn mở — điều chúng tôi tin, và cách chúng tôi làm việc.',
    contactTitle: 'Liên hệ — Siderkit',
    contactDescription: 'Nơi báo lỗi, đặt câu hỏi, hoặc báo cáo vấn đề bảo mật.',
    notFoundTitle: 'Không tìm thấy trang — Siderkit',
    notFoundDescription: 'Trang bạn đang tìm không có ở đây.',
    ogAlt: 'Biểu tượng thương hiệu Siderkit',
  },
  nav: {
    docs: 'Tài liệu',
    about: 'Giới thiệu',
    source: 'Mã nguồn',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: 'Ngôn ngữ',
    skipToContent: 'Bỏ qua tới nội dung',
    opensInNewTab: 'mở trong thẻ mới',
    backHome: 'Về trang chủ',
  },
  home: {
    eyebrow: 'Độc lập, mã nguồn mở',
    title: 'Làm việc,\nnhư lẽ ra phải vậy.',
    lead: 'Phần mềm tĩnh lặng, làm chậm rãi. Một ứng dụng đã ra mắt; những ứng dụng khác đang trên đường đến.',
    primaryCta: 'Gặp ứng dụng đầu tiên',
    closingLine: 'Độc lập · Mã nguồn mở · GPL-3.0-only · Không có nhà đầu tư',
  },
  legal: {
    eyebrow: 'Pháp lý',
    updated: 'Cập nhật lần cuối ngày 23 tháng 11 năm 2026.',
    privacy: {
      title: 'Quyền riêng tư',
      lead: 'Nói ngắn gọn: trang web này không đặt cookie và không chạy thống kê nào, còn các ứng dụng Siderkit giữ dữ liệu của bạn ngay trên thiết bị của bạn.',
      sections: [
        {
          heading: 'Trang web này',
          paragraphs: [
            'Trang web là tĩnh. Nó không đặt cookie, không tải phông chữ hay script của bên thứ ba, và không dùng thống kê.',
            'Trang web dùng phông chữ của hệ thống; không có tệp phông nào được cung cấp.',
          ],
          items: [],
        },
        {
          heading: 'Lưu trữ và nhật ký yêu cầu',
          paragraphs: [
            'Cloudflare lưu trữ trang web và ghi nhật ký yêu cầu cơ bản như một phần của hoạt động thường ngày. Những nhật ký đó chịu sự điều chỉnh của điều khoản quyền riêng tư của Cloudflare.',
            'Dự án không lập hồ sơ khách truy cập, không tạo mã định danh quảng cáo, và không ghép dữ liệu giữa các dịch vụ.',
          ],
          items: [],
        },
        {
          heading: 'Các ứng dụng Siderkit',
          paragraphs: [
            'Ứng dụng giữ dữ liệu ngay trên thiết bị của bạn: cài đặt, lịch sử, và cơ sở dữ liệu tại máy đều nằm trong đó. Không có tài khoản, không đồng bộ, và không có máy chủ nào lưu dữ liệu của bạn.',
            'Vì không có tài khoản và không có kênh đo từ xa, dự án không thể nối dữ liệu của bạn với bạn — nó chưa bao giờ nhận được dữ liệu đó.',
          ],
          items: [],
        },
        {
          heading: 'Kiểm tra cập nhật',
          paragraphs: [
            'Ứng dụng có thể kiểm tra cập nhật tại dl.siderkit.com qua HTTPS. Một yêu cầu gồm phiên bản ứng dụng, nền tảng đích, và kiến trúc.',
            'Ở lần khởi chạy đầu, yêu cầu có thể mang một mã cài đặt ngẫu nhiên để dự án đếm số lượt cài và phân bố phiên bản.',
          ],
          items: [
            'Mã cài đặt là một UUID ngẫu nhiên, lưu trong metrics.json trên thiết bị của bạn.',
            'Nó không được suy ra từ phần cứng, mạng, tài khoản, hay đường dẫn cài đặt.',
            'Bạn có thể tắt bộ đếm ẩn danh, hoặc đặt lại mã, trong phần cài đặt của ứng dụng.',
            'Không thu thập băm IP, dấu vân tay thiết bị, hay hành vi sử dụng.',
          ],
        },
        {
          heading: 'Những gì chúng tôi không bao giờ nhận được',
          paragraphs: [],
          items: [
            'Tên, email, hay bất kỳ thông tin tài khoản nào của bạn — vốn đã không có tài khoản.',
            'Nội dung công việc của bạn: tài liệu, phiên làm việc, lịch sử, hay cài đặt.',
            'Báo cáo lỗi, dấu vết sử dụng, hay mã định danh quảng cáo.',
          ],
        },
        {
          heading: 'Liên hệ',
          paragraphs: [
            'Câu hỏi về thông báo này có thể nêu lên trong issues của kho công khai — xem các liên kết ở cuối trang.',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: 'Điều khoản',
      lead: 'Những điều khoản này áp dụng cho trang web Siderkit và việc sử dụng các ứng dụng Siderkit. Bản thân phần mềm chịu sự điều chỉnh của giấy phép mã nguồn mở của nó, được mô tả trên trang giấy phép.',
      sections: [
        {
          heading: 'Điều khoản này bao phủ những gì',
          paragraphs: [
            'Chúng áp dụng cho trang web này và nội dung của nó, và cho việc bạn sử dụng các ứng dụng Siderkit với tư cách khách truy cập và người dùng.',
            'Các ứng dụng là phần mềm mã nguồn mở. Giấy phép trong kho của từng ứng dụng — không phải các điều khoản này — mới là thứ cấp quyền cho bạn đối với mã. Giấy phép được xác định theo từng ứng dụng và từng bản phát hành: bản cũ giữ nguyên giấy phép khi phát hành.',
          ],
          items: [],
        },
        {
          heading: 'Sử dụng trang web một cách chính đáng',
          paragraphs: [],
          items: [
            'Đừng bóp méo trang web này hay giả mạo dự án.',
            'Đừng thu thập dữ liệu hay sao chép trang web theo cách gây gián đoạn nó.',
            'Đừng dùng trang web để phân phát nội dung bất hợp pháp.',
            'Liên kết thoải mái; trích đoạn ngắn hãy ghi nguồn.',
          ],
        },
        {
          heading: 'Tên và dấu hiệu',
          paragraphs: [
            'Tên Siderkit, chữ S cách điệu, cùng tên và nhãn hiệu của các ứng dụng Siderkit là nhãn hiệu của dự án. Chúng không thuộc phạm vi giấy phép của ứng dụng; giấy phép cấp quyền tác giả và quyền sáng chế, không cấp quyền nhãn hiệu.',
            'Điều này quan trọng nhất khi bạn fork, dựng lại, hoặc phân phát lại mã nguồn.',
          ],
          items: [
            'Đổi tên bản dựng của bạn, hoặc ghi rõ đó là bản không chính thức.',
            'Đừng dùng tên, dấu hiệu, hay tên miền của chúng tôi theo cách khiến người hiểu là xuất xứ chính thức hoặc được xác nhận.',
            'Đừng trình bày bản dựng không chính thức như bản phát hành chính thức.',
            'Chỉ phân phát lại bản sao chưa sửa đổi khi giấy phép và các tệp thông báo còn nguyên vẹn.',
          ],
        },
        {
          heading: 'Bản dựng đã sửa đổi',
          paragraphs: [
            'Nếu bạn sửa và phân phối mã, giấy phép yêu cầu giữ các thông báo và nêu rõ thay đổi. Giấy phép copyleft như GPL-3.0-only còn yêu cầu cấp phép cho tác phẩm đã sửa theo cùng điều kiện và cung cấp mã nguồn tương ứng.',
          ],
          items: [],
        },
        {
          heading: 'Không có bảo hành',
          paragraphs: [
            'Trang web và nội dung của nó được cung cấp theo “hiện trạng”, không bảo hành dưới bất kỳ hình thức nào, minh thị hay ngầm định. Phần mềm cũng mang cùng tuyên bố từ bỏ bảo hành đó theo giấy phép của nó.',
            'Không gì trên trang này là tư vấn pháp lý; với phần mềm, văn bản giấy phép mới là căn cứ có thẩm quyền.',
          ],
          items: [],
        },
        {
          heading: 'Giới hạn trách nhiệm',
          paragraphs: [
            'Trong phạm vi tối đa mà pháp luật cho phép, dự án không chịu trách nhiệm về thiệt hại phát sinh từ việc bạn sử dụng, hoặc không thể sử dụng, trang web hay phần mềm.',
          ],
          items: [],
        },
        {
          heading: 'Đóng góp',
          paragraphs: [
            'Chúng tôi hoan nghênh đóng góp; đóng góp được cấp phép theo giấy phép của kho tương ứng. Khi đóng góp, bạn xác nhận mình có quyền cấp phép cho nội dung gửi đi.',
          ],
          items: [],
        },
        {
          heading: 'Thay đổi',
          paragraphs: [
            'Những điều khoản này có thể thay đổi mà không báo trước; các thay đổi quan trọng sẽ được phản ánh trên trang này. Kho công khai vẫn là nguồn chính thức cho mã nguồn và ghi chú phát hành.',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: 'Giấy phép',
      lead: 'Các ứng dụng Siderkit là mã nguồn mở theo giấy phép ghi trong kho của từng ứng dụng. Mã nguồn của trang này là Apache-2.0. Giấy phép được xác định theo từng ứng dụng và từng bản phát hành; văn bản giấy phép là căn cứ cuối cùng.',
      sections: [
        {
          heading: 'Nói ngắn gọn',
          paragraphs: [
            'Mỗi ứng dụng và mỗi bản phát hành mang giấy phép của mình trong kho và trong bộ cài. Giấy phép có thể thay đổi giữa các bản, và bản sao của bạn chịu sự điều chỉnh của giấy phép đi kèm nó. Mã nguồn của trang này là Apache-2.0; tệp NOTICE liệt kê ghi công.',
            'Các phụ thuộc bên thứ ba đi kèm — crate Rust và phụ thuộc web — giữ giấy phép riêng của chúng, được ghi trong lockfile của kho và các thông báo bên thứ ba.',
          ],
          items: [],
        },
        {
          heading: 'Bạn được làm gì',
          paragraphs: [],
          items: [
            'Dùng ứng dụng cho bất kỳ mục đích nào, kể cả thương mại.',
            'Nghiên cứu và sửa mã nguồn.',
            'Phân phát lại các bản sao, nguyên bản hoặc đã sửa đổi.',
            'Dựa vào cam kết sáng chế mà GPL-3.0 cung cấp.',
          ],
        },
        {
          heading: 'Bạn phải làm gì',
          paragraphs: [],
          items: [
            'Giữ giấy phép và thông báo bản quyền cùng với mã nguồn.',
            'Kèm toàn văn giấy phép khi phân phát.',
            'Nêu rõ thay đổi quan trọng, giữ thông báo, và với giấy phép copyleft như GPL-3.0-only, cấp phép bản sửa theo cùng điều kiện và cung cấp mã nguồn tương ứng.',
            'Giữ thông báo và ghi công của bên thứ ba.',
          ],
        },
        {
          heading: 'Bạn nên biết',
          paragraphs: [],
          items: [
            'Phần mềm được cung cấp theo “hiện trạng”, không bảo hành dưới bất kỳ hình thức nào.',
            'Dự án không chịu trách nhiệm về cách mã nguồn được sử dụng ở những công đoạn sau.',
            'Giấy phép cấp quyền tác giả và quyền sáng chế — nó không cấp thương hiệu của chúng tôi.',
          ],
        },
        {
          heading: 'Tên và dấu hiệu',
          paragraphs: [
            'Tên Siderkit, chữ S cách điệu, cùng tên và nhãn hiệu của các ứng dụng Siderkit không thuộc giấy phép của ứng dụng, kể cả GPL-3.0-only. Nếu bạn fork hoặc phân phối lại, hãy đổi tên bản dựng hoặc ghi rõ là không chính thức — xem trang điều khoản.',
          ],
          items: [],
        },
        {
          heading: 'Trang web này',
          paragraphs: [
            'Mã nguồn trang web là Apache-2.0, dựng bằng Astro, Starlight, và TypeScript. Trang dùng phông chữ hệ thống; không có tệp phông nào được cung cấp.',
          ],
          items: [],
        },
        {
          heading: 'Tài nguyên',
          paragraphs: [
            'Các âm thanh đi kèm là tài nguyên gốc được tạo riêng cho dự án, phân phát theo cùng giấy phép với các ứng dụng.',
            'Ảnh chụp màn hình có thể dùng trong bài đánh giá và bài viết, kèm ghi nguồn.',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: 'Bảo mật',
      lead: 'Vui lòng báo cáo lỗ hổng theo kênh riêng tư. Dự án sẽ vá chúng trước khi công bố.',
      sections: [
        {
          heading: 'Cách báo cáo',
          paragraphs: [
            'Hãy dùng GitHub private security advisory — các liên kết ở cuối trang dẫn tới đúng kho cần thiết. Đừng mở issue công khai cho lỗ hổng.',
          ],
          items: [],
        },
        {
          heading: 'Nội dung cần kèm',
          paragraphs: [],
          items: [
            'Phiên bản ứng dụng, nền tảng, và kiến trúc.',
            'Các bước tái hiện, và một bản chứng minh khái niệm nếu bạn có.',
            'Mức ảnh hưởng: kẻ tấn công có thể làm gì với nó.',
            'Cách ghi nhận bạn muốn, hoặc không ghi nhận — tùy bạn.',
          ],
        },
        {
          heading: 'Chuyện gì xảy ra tiếp theo',
          paragraphs: [],
          items: [
            'Chúng tôi xác nhận đã nhận báo cáo trong vòng năm ngày làm việc.',
            'Chúng tôi đánh giá mức độ nghiêm trọng và phối hợp khắc phục.',
            'Chúng tôi phát hành bản vá và công bố khuyến cáo trước khi công khai.',
            'Bạn có thể công bố ngay khi khuyến cáo đã ra mắt — đó là công bố phối hợp.',
          ],
        },
        {
          heading: 'Trong phạm vi',
          paragraphs: [],
          items: [
            'Bản phát hành mới nhất của từng ứng dụng Siderkit.',
            'Bộ cài đặt và đường dẫn xác minh cập nhật.',
            'Trang web này.',
          ],
        },
        {
          heading: 'Ngoài phạm vi',
          paragraphs: [],
          items: [
            'Kỹ thuật xã hội, hoặc những vấn đề đòi hỏi thiết bị đã bị chiếm quyền từ trước.',
            'Dịch vụ bên thứ ba nằm ngoài mã nguồn của chúng tôi.',
            'Các cuộc tấn công gây gián đoạn trang web chứ không làm lộ dữ liệu.',
            'Yêu cầu tăng cường những tính năng vốn không phải lỗ hổng.',
          ],
        },
        {
          heading: 'Tình trạng ký số',
          paragraphs: [
            'Bộ cài Windows được ký bằng minisign và được xác minh trước khi cài.',
            'Các bản dựng macOS hiện chưa ký; cảnh báo Gatekeeper là điều dễ gặp cho đến khi cấu hình ký số xong. Hãy tải trực tiếp từ trang này hoặc GitHub Releases.',
          ],
          items: [],
        },
        {
          heading: 'Vùng an toàn',
          paragraphs: [
            'Nghiên cứu thiện chí trong phạm vi này sẽ không bị truy cứu về mặt pháp lý, miễn là bạn tôn trọng quyền riêng tư của người dùng, tránh gây gián đoạn dịch vụ, và đi theo quy trình công bố ở trên.',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: 'Dự án',
    about: {
      title: 'Điều chúng tôi tin.',
      lead: 'Siderkit là một dự án độc lập, mã nguồn mở.',
      paragraphs: [
        'Lúc này mới có một ứng dụng — một bộ hẹn giờ tập trung êm ái, dữ liệu nằm ngay trên máy, nhắc bạn nghỉ, đứng dậy, và nhìn xa. Trang sản phẩm, tài liệu, và ghi chú phát hành của nó nằm trên trang web này.',
        'Mã nguồn, quyết định, và thảo luận đều để ở nơi công khai. Chúng tôi tin đó là cách niềm tin bén rễ.',
      ],
      cta: 'Xem các kho mã nguồn',
    },
    contact: {
      title: 'Nói chuyện với chúng tôi.',
      lead: 'Không có biểu mẫu liên hệ, không có hàng chờ hỗ trợ. Hãy dùng kênh công khai để ai cũng học được từ câu trả lời.',
      channels: [
        {
          key: 'appIssues',
          title: 'Lỗi ứng dụng',
          body: 'Mở một issue kèm phiên bản, nền tảng, và các bước tái hiện.',
          linkLabel: 'Mở issue',
        },
        {
          key: 'siteDiscussions',
          title: 'Câu hỏi về trang web và câu hỏi chung',
          body: 'Mở một cuộc thảo luận trong kho của trang web.',
          linkLabel: 'Bắt đầu thảo luận',
        },
        {
          key: 'security',
          title: 'Bảo mật',
          body: 'Hãy dùng kênh advisory bảo mật riêng tư thay vì issue công khai.',
          linkLabel: 'Báo cáo riêng tư',
        },
        {
          key: 'translations',
          title: 'Bản dịch',
          body: 'Đọc hướng dẫn đóng góp trước khi mở pull request.',
          linkLabel: 'Đọc CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: 'Không tìm thấy trang.',
    body: 'Trang bạn đang tìm không có ở đây. Trang có thể đã đổi chỗ, hoặc liên kết có thể sai.',
    home: 'Về trang chủ',
    docs: 'Xem tài liệu',
    note: 'Trang này hiển thị bằng tiếng Anh, tiếng Trung giản thể, và tiếng Trung phồn thể.',
  },
  footer: {
    tagline: 'Làm việc, như lẽ ra phải vậy.',
    apps: 'Ứng dụng',
    legal: 'Pháp lý',
    company: 'Dự án',
    elsewhere: 'Nơi khác',
    privacy: 'Quyền riêng tư',
    terms: 'Điều khoản',
    licenses: 'Giấy phép',
    security: 'Bảo mật',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    discussions: 'Thảo luận',
    siteSource: 'Mã nguồn trang web',
    copyright: '© 2026 Siderkit contributors.',
    language: 'Ngôn ngữ',
  },
} satisfies Messages;
