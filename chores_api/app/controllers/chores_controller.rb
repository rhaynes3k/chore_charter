class ChoresController < ApplicationController
  before_action :set_chore, only: [:show, :update, :destroy]

  # GET /chores
  def index
    if params[:user_id]
      user = User.find_by(id: params[:id])
      chores = user.chores
    else
      chores = Chore.all
    end
    render json: chores.to_json(except:[:created_at, :updated_at], :include => [user: {only: [:fName, :lName]}])

  end

  # GET /chores/1
  def show
    if params[:user_id]
      user = User.find_by(id: params[:id])
      chore = user.chore
    else
      chore = Chore.find(params[:id])
    end
    render json: chore
  end

  # POST /chores
  def create
    chore = Chore.new(chore_params)

    if chore.save
      render json: chore, status: :created, location: chore
    else
      render json: chore.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chores/1
  def update
    if chore.update(chore_params)
      render json: chore
    else
      render json: chore.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chores/1
  def destroy
    chore.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chore
      chore = Chore.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def chore_params
      params.require(:chore).permit(:choreName, :choreDOW, :user_id)
    end
end
