class DaysOfTheWeeksController < ApplicationController
  before_action :set_days_of_the_week, only: [:show, :update, :destroy]

  # GET /days_of_the_weeks
  def index
    days_of_the_weeks = DaysOfTheWeek.all

    render json: days_of_the_weeks
  end

  # GET /days_of_the_weeks/1
  def show
    render json: days_of_the_week
  end

  # POST /days_of_the_weeks
  def create
    days_of_the_week = DaysOfTheWeek.new(days_of_the_week_params)

    if days_of_the_week.save
      render json: days_of_the_week, status: :created, location: days_of_the_week
    else
      render json: days_of_the_week.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /days_of_the_weeks/1
  def update
    if days_of_the_week.update(days_of_the_week_params)
      render json: days_of_the_week
    else
      render json: days_of_the_week.errors, status: :unprocessable_entity
    end
  end

  # DELETE /days_of_the_weeks/1
  def destroy
    days_of_the_week.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_days_of_the_week
      days_of_the_week = DaysOfTheWeek.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def days_of_the_week_params
      params.require(:days_of_the_week).permit(:monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :chore_id)
    end
end
