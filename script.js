// Hàm hiển thị giao diện giảng viên
function showTeacherInterface() {
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('teacher-interface').style.display = 'block';
    document.getElementById('student-interface').style.display = 'none';
    document.getElementById('level-selection').style.display = 'none';  
    document.getElementById('content-options').style.display = 'none';  
    document.getElementById('age-selection').style.display = 'none';  
    document.getElementById('question-input').style.display = 'none';  


}

// Hàm hiển thị giao diện người học
function showStudentInterface() {
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('teacher-interface').style.display = 'none';
    document.getElementById('student-interface').style.display = 'block';

}






function showTeacherInterface() {
    hideRoleSelection();
    window.botpress.open({ type: "show" }); // Hiển thị chatbox khi chọn vai trò
}

function showStudentInterface() {
    hideRoleSelection();
    window.botpress.open({ type: "show" }); // Hiển thị chatbox khi chọn vai trò
}

function hideRoleSelection() {
    document.getElementById("role-selection").style.display = "none";
}







// Hàm hiển thị các tùy chọn cấp độ khi chọn lĩnh vực
function showLevelOptions() {
    const educationType = document.getElementById('education-type').value;  // Lĩnh vực
    const levelSelect = document.getElementById('level');
    
    // Đảm bảo khi chưa chọn lĩnh vực sẽ không hiển thị cấp độ
    if (!educationType) {
        document.getElementById('level-selection').style.display = 'none';
        document.getElementById('content-options').style.display = 'none';
        return;
    }
    
    // Hiển thị cấp độ khi chọn lĩnh vực
    document.getElementById('level-selection').style.display = 'block';
    levelSelect.innerHTML = '<option value="">--Chọn cấp độ--</option>';
    
    const contentOptions = {
        'STEAM': {
            'LV1': ['Khoa học cơ bản', 'Toán học cơ bản', 'Nghệ thuật sáng tạo'],
            'LV2': ['Khoa học', 'Công nghệ', 'Kỹ thuật', 'Toán học'],
            'LV3': ['Khoa học máy tính', 'Công nghệ thông tin', 'Kỹ thuật cơ khí', 'Toán ứng dụng'],
            'LV4': ['Khám phá thế giới STEAM', 'Khám phá công nghệ mới'],
            'LV5': ['Khám phá tiềm năng', 'Sáng tạo trong khoa học'],
            'LV6': ['Hiện thực hóa ý tưởng', 'Ứng dụng công nghệ sáng tạo'],
            'LV7': ['Giải quyết các vấn đề thực tế', 'Thử thách với công nghệ'],
            'LV8': ['Lãnh đạo tương lai', 'Sáng tạo đổi mới']
        },
        'HE': {
            'LV1': ['Giới thiệu các ngành học', 'Tư duy phản biện cơ bản'],
            'LV2': ['Nghiên cứu văn hóa', 'Khám phá các ngành khoa học xã hội'],
            'LV3': ['Giới thiệu nghiên cứu xã hội', 'Phát triển công nghệ trong giáo dục'],
            'LV4': ['Phát triển nghiên cứu khoa học', 'Sử dụng công nghệ trong nghiên cứu'],
            'LV5': ['Khám phá các ngành học đại học', 'Lập kế hoạch nghiên cứu'],
            'LV6': ['Nghiên cứu nâng cao', 'Phân tích dữ liệu'],
            'LV7': ['Giải quyết thách thức toàn cầu', 'Nghiên cứu xã hội thực tế'],
            'LV8': ['Lãnh đạo trong giáo dục', 'Nghiên cứu phát triển bền vững']
        }
    };

    // Tạo các tùy chọn cấp độ
    const levels = contentOptions[educationType];
    for (const level in levels) {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = `${level} - ${level.split('V')[1]}`;  // Hiển thị LV1, LV2...
        levelSelect.appendChild(option);
    }

    // Hiển thị độ tuổi khi chọn lĩnh vực và cấp độ
    document.getElementById('age-selection').style.display = 'block';
    document.getElementById('content-options').style.display = 'none';  // Ẩn phần nội dung
}

// Hàm hiển thị nội dung khi chọn cấp độ
function showContentForLevel() {
    const educationType = document.getElementById('education-type').value;
    const level = document.getElementById('level').value;
    const contentSelect = document.getElementById('content');
    const ageGroup = document.getElementById('age-group').value;
    
    const contentOptions = {
        'STEAM': {
            'LV1': ['Khoa học cơ bản', 'Toán học cơ bản', 'Nghệ thuật sáng tạo'],
            'LV2': ['Khoa học', 'Công nghệ', 'Kỹ thuật', 'Toán học'],
            'LV3': ['Khoa học máy tính', 'Công nghệ thông tin', 'Kỹ thuật cơ khí', 'Toán ứng dụng'],
            'LV4': ['Khám phá thế giới STEAM', 'Khám phá công nghệ mới'],
            'LV5': ['Khám phá tiềm năng', 'Sáng tạo trong khoa học'],
            'LV6': ['Hiện thực hóa ý tưởng', 'Ứng dụng công nghệ sáng tạo'],
            'LV7': ['Giải quyết các vấn đề thực tế', 'Thử thách với công nghệ'],
            'LV8': ['Lãnh đạo tương lai', 'Sáng tạo đổi mới']
        },
        'HE': {
            'LV1': ['Giới thiệu các ngành học', 'Tư duy phản biện cơ bản'],
            'LV2': ['Nghiên cứu văn hóa', 'Khám phá các ngành khoa học xã hội'],
            'LV3': ['Giới thiệu nghiên cứu xã hội', 'Phát triển công nghệ trong giáo dục'],
            'LV4': ['Phát triển nghiên cứu khoa học', 'Sử dụng công nghệ trong nghiên cứu'],
            'LV5': ['Khám phá các ngành học đại học', 'Lập kế hoạch nghiên cứu'],
            'LV6': ['Nghiên cứu nâng cao', 'Phân tích dữ liệu'],
            'LV7': ['Giải quyết thách thức toàn cầu', 'Nghiên cứu xã hội thực tế'],
            'LV8': ['Lãnh đạo trong giáo dục', 'Nghiên cứu phát triển bền vững']
        }
    };

    if (!educationType || !level || !ageGroup) {
        document.getElementById('content-options').style.display = 'none';
        return;
    }

    // Hiển thị các nội dung theo cấp độ và lĩnh vực
    const options = contentOptions[educationType][level];
    contentSelect.innerHTML = '<option value="">--Chọn nội dung--</option>';
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        contentSelect.appendChild(optionElement);
    });

    document.getElementById('content-options').style.display = 'block';
}

// Hàm hiển thị phần nhập câu hỏi cho giảng viên
function showQuestionInput() {
    document.getElementById('question-input').style.display = 'block';
}

// Hàm gửi câu hỏi giảng viên và nhận phản hồi từ AI
function submitTeacherQuestion() {
    const question = document.getElementById('question').value;
    const educationType = document.getElementById('education-type').value;
    const level = document.getElementById('level').value;
    const content = document.getElementById('content').value;

    document.getElementById('teacher-response').innerHTML = `AI sẽ trả lời câu hỏi trong lĩnh vực ${educationType}, cấp độ ${level}, môn học: ${content}. Câu hỏi: ${question}`;
}

// Hàm gửi câu hỏi người học và nhận phản hồi từ AI
function submitStudentQuestion() {
    const question = document.getElementById('student-question').value;
    document.getElementById('student-response').innerHTML = `AI sẽ trả lời câu hỏi: ${question}`;
}

