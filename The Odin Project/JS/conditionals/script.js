let grade = -5;

if (90 < grade && grade <= 100) {
    alert("Excelent")
} else if (80 <= grade && grade <= 89) {
    alert("Very Good")
} else if (70 <= grade && grade <= 79) {
    alert("Good")
} else if (60 <= grade && grade <= 69) {
    alert("Average")
} else if (51 <= grade && grade <= 59) {
    alert("Needs Improvement")
} else if (0 <= grade && grade <= 50) {
    alert("Failed")
} else {
    alert("Invalid score")
}