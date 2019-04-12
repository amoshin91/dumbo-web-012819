class Api::V1::AuthController < ApplicationController
  def create
    @user = User.find_by(username: user_login_params[:username])
    if @user && @user.authenticate(user_login_params[:password])
      token = JWT.encode({ user_id: @user.id }, "secret")
      render json: { user:@user , jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  # Showing the current user
  def show
    user_id = JWT.decode(request.headers["Authorization"], nil, false)[0]["user_id"]
    user = User.find(user_id)
    render json: { user: user}
    # This is the token: request.headers["Authorization"]
  end


  private

  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
