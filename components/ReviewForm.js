app.component('review-form', {
    props: {
    },
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="name" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <p>Would you recommend this product?</p>

        <input type="radio" name="recommend" id="yes" value="Yes" v-model="recommended">
        <label for="yes">Yes</label>
        <br/>
        <input type="radio" name="recommend" id="no" value="No" v-model="recommended">
        <label for="no">No</label>

        <input class="button" type="submit" value="Submit">

    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === '') {
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended,
            }
            console.log(productReview)
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommended = null
        }
    },
    computed: {
    }
})